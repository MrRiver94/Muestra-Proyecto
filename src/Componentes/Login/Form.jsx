import React from "react";
import { useForm } from "react-hook-form";
import "../Login/form.css"

const comunidadesAutonomas = [
  "Madrid",
  "Galicia",
  "Asturias",
  "Cataluña",
  "Pais Vasco",
  "Cantabria",
  "Navarra",
  "Aragón",
  "La Rioja",
  "Valencia",
  "Murcia",
  "Andalucía",
  "Castilla y León",
  "Castilla La Mancha",
  "Extremadura",
  "Islas Baleares",
  "Las Canarias",
  "Ceuta",
  "Melilla"
];

const citiesByCommunity = {
  Galicia: ["Lugo"],
  Madrid: ["Madrid"],
  Asturias: ["Gijón"],
  Cataluña: ["Barcelona"],
  Cantabria: ["Castro Urdiales"],
  Navarra: ["Pamplona"],
  Aragón: ["Zaragoza"],
  LaRioja: ["Logroño"],
  PaisVasco: ["Bilbao"],
  Valencia: ["Valencia"],
  Murcia: ["Murcia"],
  Andalucía: ["Sevilla"],
  CastillayLeón: ["León"],
  CastillaLaMancha: ["Toledo"],
  Extremadura: ["Badajoz"],
  IslasBaleares: ["Formentera"],
  LasCanarias: ["Lanzarote"],
  Ceuta: ["Ceuta"],
  Melilla: ["Melilla"]
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    setError,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  const handlePasswordValidation = () => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    if (password.length < 6) {
      setError("password", {
        message: "La contraseña debe tener al menos 6 caracteres."
      });
    } else {
      clearErrors("password");
    }

    if (password !== confirmPassword) {
      setError("confirmPassword", {
        message: "Las contraseñas no coinciden"
      });
    } else {
      clearErrors("confirmPassword");
    }
  };

  const handleEmailValidation = () => {
    const email = watch("email");

    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      setError("email", {
        message: "Ingrese una dirección de correo electrónico válida"
      });
    } else {
      clearErrors("email");
    }
  };

  return (
    <>
      <h1>Formulario de registro</h1>
      <form onSubmit={onSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            {...register("name", {
              required: "Por favor, ingrese su nombre.",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
              maxLength: { value: 40, message: "Máximo 40 caracteres" }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Por favor, ingrese su email"
            })}
            onBlur={handleEmailValidation}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            {...register("password", {
              required: "Por favor, ingrese su contraseña.",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres"
              }
            })}
            onBlur={handlePasswordValidation}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>

        <label>
          Repetir contraseña:
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Por favor, repita su contraseña."
            })}
            onBlur={handlePasswordValidation}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </label>

        <label>
          Comunidad Autónoma:
          <select
            {...register("community", {
              required: "Por favor, seleccione su Comunidad Autónoma."
            })}
          >
            <option value="">Seleccione</option>
            {comunidadesAutonomas.map((community) => (
              <option key={community} value={community}>{community}</option>
            ))}
          </select>
          {errors.community && <span>{errors.community.message}</span>}
        </label>

        {watch("community") && (
          <label>
            Ciudad:
            <select
              {...register("city", {
                required: "Por favor, seleccione su ciudad"
              })}
            >
              <option value="">Seleccione...</option>
              {citiesByCommunity[watch("community")].map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </label>
        )}

        <label>
          Género:
          <select
            {...register("gender", {
              required: "Por favor, seleccione su género"
            })}
          >
            <option value="">Seleccione..</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </label>

        <label>
          <input
            type="checkbox"
            {...register("termsAccepted", {
              required: "Debe aceptar los términos y condiciones"
            })}
          />
          Acepto términos y condiciones
        </label>
        {errors.termsAccepted && (
          <span>{errors.termsAccepted.message}</span>
        )}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default ReactHookForm;
