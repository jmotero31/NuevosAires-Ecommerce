const pedido = (form, cart, total) => {
  return {
    buyer: {
        nombre: form.name,
        correo: form.email,
        cel: form.phone,
        direccion: form.address,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleDateString()
  }

}
export default pedido