import React from 'react'

type Props = { name?: string; email?: string; message?: string };

export default function EmailTemplate({ name = "Usuario", email = "", message = "" }: Props) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>
      <h2>Nuevo mensaje desde el sitio</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <hr />
      <p>{message}</p>
      <hr />
      <small>AITERA TECH</small>
    </div>
  );
}
