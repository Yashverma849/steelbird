export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "certification",
    question: "Are Steelbird helmets ISI and ECE certified?",
    answer:
      "Yes. Every Steelbird helmet in our current catalogue meets applicable Indian ISI standards. Select models also carry ECE and DOT certifications for international riding compliance.",
  },
  {
    id: "sizing",
    question: "How do I choose the right helmet size?",
    answer:
      "Measure the circumference of your head just above the eyebrows. Use our size chart on each product page. The helmet should fit snugly without pressure points and should not shift when you move your head.",
  },
  {
    id: "visor",
    question: "Can I replace the visor on modular helmets?",
    answer:
      "Modular and flip-up models such as the Ignyte Modular V2 support quick-release visor systems. Replacement visors are available through authorised Steelbird dealers and our support team.",
  },
  {
    id: "warranty",
    question: "What is covered under the Steelbird warranty?",
    answer:
      "Manufacturing defects in shell integrity, retention system, and EPS liner are covered for the period stated on your purchase invoice. Normal wear, crash damage, and improper care are not covered.",
  },
  {
    id: "cleaning",
    question: "How should I clean my helmet?",
    answer:
      "Remove inner padding and hand-wash with mild soap. Wipe the outer shell with a damp cloth only. Avoid solvents, harsh chemicals, and direct heat that can degrade EPS foam.",
  },
  {
    id: "dealers",
    question: "Where can I buy Steelbird helmets offline?",
    answer:
      "Use our Store Locator or contact customer care at 1800 102 3260 to find authorised dealers across India. You can also shop the full collection online at steelbirdhelmet.com.",
  },
];
