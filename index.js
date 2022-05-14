const app = require('express')();
const port = 8080;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
 
const apiKey = 'nXa_JnVT3fIrsCsrTz195KfnTNYF2IBa';

app.listen(port, () => console.log('started'));

app.get('/test', async (req, res) => {

    const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/" + apiKey);

    const nfts = await web3.alchemy.getNfts({owner: req.query.address})

    const image = nfts.ownedNfts[0].metadata.image

    const name = nfts.ownedNfts[0].metadata.name

    res.status(200).send({
        'image': image,
        'name': name
    })
})
