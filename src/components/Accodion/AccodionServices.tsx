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
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements.",
  },
  {
    title: "NLP Solutions",
    content:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. ",
  },
  {
    title: "Custom AI Model Development",
    content:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements.",
  },
];

const AccordionServices = () => {
  return (
    <div className="">
      <Accordion items={items} />


    </div>
  );
};

export default AccordionServices;