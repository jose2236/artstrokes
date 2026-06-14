import { siteMetadata, generateAdvancedSeoSchema } from '@/contents/siteMetadata'

interface FAQItem {
  name: string;
  acceptedAnswer?: {
    text: string;
  };
}

export default function FAQ() {
  const schemaData = generateAdvancedSeoSchema(siteMetadata);
  
  const graph = (schemaData['@graph'] || []) as Record<string, unknown>[];
  
  const faqBlock = graph.find(item => item['@type'] === 'FAQPage');
  
  const faqList = faqBlock && Array.isArray(faqBlock.mainEntity) 
    ? (faqBlock.mainEntity as FAQItem[]) 
    : [];

  const tagsMap = [
    { id: '01', tag: 'PROCESO REVOLUCIONARIO' },
    { id: '02', tag: 'COSTOS TRANSPARENTES' },
    { id: '03', tag: 'COBERTURA DIGITAL' }
  ];

  return (
    <section className="bg-white border-bottom-2 border-fg overflow-hidden s-wrap">
      <div className="max-w-4xl mx-auto padding-y-lg px-12 md:px-16">
        
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4">
          {"// dudas comunes _"}
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none mb-16">
          Preguntas <br />Frecuentes
        </h2>
        
        <div className="space-y-12">
          {faqList.map((faq: FAQItem, index: number) => {
            const questionText = faq.name;
            const answerText = faq.acceptedAnswer?.text;
            const decoration = tagsMap[index] || { id: `0${index + 1}`, tag: 'PREGUNTA' };

            return (
              <div 
                key={index} 
                className="border-top border-border pt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <span className="font-mono text-xs text-muted">
                  {decoration.id} / {decoration.tag}
                </span>
                <div className="md:col-span-2">
                  <h4 className="font-display text-lg font-bold uppercase mb-3 text-fg">
                    {questionText}
                  </h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    {answerText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}