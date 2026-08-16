import Accordion from "./Accodion";


const items = [
  {
    title: "Hyperparameter model tuning",
    content:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.",
  },
  {
    title: "AI Consultation",
    content:
      "Our AI experts provide consultation to help you identify the right AI solutions and strategies for your business requirements.",
  },
  {
    title: "NLP Solutions",
    content:
      "We develop natural language processing solutions that help businesses understand, process, and work with human language.",
  },
  {
    title: "Custom AI Model Development",
    content:
      "We build custom AI models designed around your specific business requirements and use cases.",
  },
];

const AccordionServices = () => {
  return (
    <div>
      <Accordion items={items} />

     
    </div>
  );
};

export default AccordionServices;