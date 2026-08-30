function FAQ() {
  const questions = [
    {
      question: "¿Cómo puedo comprar?",
      answer:
        "Elegí el producto que quieras, agregalo al carrito y completá tus datos en el checkout.",
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer:
        "Podés consultar los medios de pago disponibles en nuestra sección de medios de pago.",
    },
    {
      question: "¿Realizan envíos?",
      answer:
        "Sí. Realizamos envíos y entregas según la localidad y el servicio disponible.",
    },
    {
      question: "¿Cómo puedo saber el estado de mi pedido?",
      answer:
        "Una vez despachado el pedido, recibirás la información correspondiente para realizar el seguimiento.",
    },
    {
      question: "¿Puedo realizar un cambio?",
      answer:
        "Sí. Si necesitás realizar un cambio, comunicate con nosotros indicando tu número de pedido.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          ANTAFEX
        </p>

        <h1 className="text-4xl font-black md:text-5xl">
          Preguntas frecuentes
        </h1>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">

          {questions.map((item, index) => (
            <details
              key={index}
              className="group p-6"
            >
              <summary className="cursor-pointer list-none font-bold">
                {item.question}
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}

        </div>

      </section>
    </main>
  );
}

export default FAQ;