function status(request, response) {
  response.status(200).json({ chave: "valor da média" });
}

export default status;
