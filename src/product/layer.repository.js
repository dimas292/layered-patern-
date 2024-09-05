const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (req, res) => {
const dataRequest = req.body;
  await prisma.product.create({
    data: {
      name: dataRequest.name,
      price: dataRequest.price,
      description: dataRequest.description,
      image: dataRequest.image,
    },
  });

  return 
};

const findById = async (dataId) => {
    const data = await prisma.product.findFirst({
        where: {id: dataId}
    })

    return data
}

module.exports = {create, findById}
