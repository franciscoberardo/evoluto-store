import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaLock,
  FaCreditCard,
  FaCheck,
} from "react-icons/fa";

function Checkout() {
  const navigate = useNavigate();

  const [completed, setCompleted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };


  const formatExpiry = (value) => {
    const numbers = value
      .replace(/\D/g, "")
      .slice(0, 4);

    if (numbers.length >= 3) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    }

    return numbers;
  };


  const validate = () => {
    const newErrors = {};

    const requiredFields = [
      "name",
      "lastName",
      "email",
      "address",
      "city",
      "province",
      "postalCode",
      "cardNumber",
      "cardName",
      "expiry",
      "cvv",
    ];

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = "Campo requerido";
      }
    });


    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Email inválido";
    }


    const cardNumbers = form.cardNumber.replace(/\D/g, "");

    if (
      form.cardNumber &&
      cardNumbers.length !== 16
    ) {
      newErrors.cardNumber = "Ingresá 16 números";
    }


    if (
      form.expiry &&
      !/^\d{2}\/\d{2}$/.test(form.expiry)
    ) {
      newErrors.expiry = "Formato MM/AA";
    }


    if (
      form.cvv &&
      !/^\d{3,4}$/.test(form.cvv)
    ) {
      newErrors.cvv = "CVV inválido";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setCompleted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /* COMPRA FINALIZADA */
  if (completed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6">

        <div className="w-full max-w-lg text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-[0_0_60px_rgba(220,38,38,0.25)]">
            <FaCheck
              size={30}
              className="text-white"
            />
          </div>

          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-500">
            Compra realizada
          </p>

          <h1 className="mt-3 text-4xl font-black text-white">
            ¡Gracias por tu compra!
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-zinc-500">
            Tu pedido fue generado correctamente.
            Recibirás la confirmación de tu compra
            en tu email.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <p className="text-xs uppercase tracking-widest text-zinc-600">
              Número de pedido
            </p>

            <p className="mt-2 text-lg font-black text-white">
              #ANT-{Math.floor(10000 + Math.random() * 90000)}
            </p>

          </div>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-xl bg-red-600 px-7 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-500"
          >
            Volver a la tienda
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#050505]">

      {/* TOP */}
      <div className="border-b border-white/10 bg-[#080808]">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Link
            to="/carrito"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-white"
          >
            <FaArrowLeft size={12} />
            Volver al carrito
          </Link>

          <div className="flex items-center gap-2">
            <FaLock
              size={11}
              className="text-red-500"
            />

            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Compra segura
            </span>
          </div>

        </div>

      </div>


      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="mb-12">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
            ANTAFEX / CHECKOUT
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">
            Finalizar compra
          </h1>

        </div>


        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]"
        >

          {/* LEFT */}
          <div className="space-y-8">

            {/* DATOS PERSONALES */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                  01
                </div>

                <div>
                  <h2 className="font-black text-white">
                    Datos personales
                  </h2>

                  <p className="mt-1 text-xs text-zinc-600">
                    Información de contacto
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <Input
                  label="Nombre"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <Input
                  label="Apellido"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <Input
                  label="Teléfono"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />

              </div>

            </section>


            {/* ENVÍO */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                  02
                </div>

                <div>
                  <h2 className="font-black text-white">
                    Datos de envío
                  </h2>

                  <p className="mt-1 text-xs text-zinc-600">
                    ¿Dónde enviamos tu pedido?
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div className="md:col-span-2">
                  <Input
                    label="Dirección"
                    name="address"
                    placeholder="Ej: Av. Corrientes 1234"
                    value={form.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </div>

                <Input
                  label="Ciudad"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                />

                <Input
                  label="Provincia"
                  name="province"
                  value={form.province}
                  onChange={handleChange}
                  error={errors.province}
                />

                <Input
                  label="Código postal"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  error={errors.postalCode}
                />

              </div>

            </section>


            {/* PAGO */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                  03
                </div>

                <div>
                  <h2 className="font-black text-white">
                    Método de pago
                  </h2>

                  <p className="mt-1 text-xs text-zinc-600">
                    Pago seguro con tarjeta
                  </p>
                </div>

              </div>


              <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">

                <FaCreditCard
                  className="text-red-500"
                  size={18}
                />

                <div>
                  <p className="text-xs font-bold text-white">
                    Tarjeta de crédito o débito
                  </p>

                  <p className="mt-1 text-[10px] text-zinc-600">
                    Tus datos están protegidos.
                  </p>
                </div>

              </div>


              <div className="space-y-5">

                <Input
                  label="Número de tarjeta"
                  name="cardNumber"
                  placeholder="4242 4242 4242 4242"
                  value={form.cardNumber}
                  onChange={(event) => {
                    setForm((previous) => ({
                      ...previous,
                      cardNumber: formatCardNumber(event.target.value),
                    }));
                  }}
                  error={errors.cardNumber}
                  inputMode="numeric"
                />


                <Input
                  label="Nombre en la tarjeta"
                  name="cardName"
                  placeholder="NOMBRE APELLIDO"
                  value={form.cardName}
                  onChange={handleChange}
                  error={errors.cardName}
                />


                <div className="grid grid-cols-2 gap-5">

                  <Input
                    label="Vencimiento"
                    name="expiry"
                    placeholder="MM/AA"
                    value={form.expiry}
                    onChange={(event) => {
                      setForm((previous) => ({
                        ...previous,
                        expiry: formatExpiry(event.target.value),
                      }));
                    }}
                    error={errors.expiry}
                    inputMode="numeric"
                  />

                  <Input
                    label="CVV"
                    name="cvv"
                    placeholder="123"
                    value={form.cvv}
                    onChange={handleChange}
                    error={errors.cvv}
                    inputMode="numeric"
                    maxLength={4}
                  />

                </div>

              </div>

            </section>

          </div>


          {/* RIGHT / SUMMARY */}
          <aside>

            <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">

              <h2 className="text-lg font-black text-white">
                Resumen del pedido
              </h2>


              {/* PRODUCTOS DE EJEMPLO */}
              <div className="mt-7 space-y-4 border-b border-white/10 pb-6">

                <div className="flex justify-between gap-4">

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Productos
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                      Tu carrito
                    </p>
                  </div>

                  <p className="text-sm font-bold text-white">
                    $105.000
                  </p>

                </div>

              </div>


              <div className="space-y-4 py-6">

                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Subtotal
                  </span>

                  <span className="font-semibold text-white">
                    $105.000
                  </span>
                </div>


                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Envío
                  </span>

                  <span className="font-semibold text-white">
                    $5.000
                  </span>
                </div>

              </div>


              <div className="flex items-end justify-between border-t border-white/10 pt-5">

                <span className="text-sm font-bold text-zinc-400">
                  Total
                </span>

                <span className="text-2xl font-black text-white">
                  $110.000
                </span>

              </div>


              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-500 active:scale-[0.98]"
              >
                <FaLock size={11} />
                Finalizar compra
              </button>


              <p className="mt-4 text-center text-[10px] leading-4 text-zinc-600">
                Al finalizar la compra aceptás nuestros
                términos y condiciones.
              </p>

            </div>

          </aside>

        </form>

      </div>

    </main>
  );
}


/* INPUT REUTILIZABLE */
function Input({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder = "",
  inputMode,
  maxLength,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-500"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className={`h-12 w-full rounded-xl border bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 ${
          error
            ? "border-red-500"
            : "border-white/10 focus:border-red-500/60"
        }`}
      />

      {error && (
        <p className="mt-1.5 text-[10px] font-medium text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default Checkout;