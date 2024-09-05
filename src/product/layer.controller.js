const {create, findById }= require('../product/layer.repository')

const createProduct = async (req, res) => {
  try {
    await create(req, res)
  } catch (error) {
    throw error;
  }
  res.send("create user success");
};

const getProductByID = async (req, res) => {
    const idParam = parseInt(req.params.id, 10)
    try {
        const data =  await findById(idParam)
        res.status(200).send({"message" : "success", "payload" : data})
    } catch (error) {
        throw error
    }
}
module.exports = {createProduct, getProductByID}
