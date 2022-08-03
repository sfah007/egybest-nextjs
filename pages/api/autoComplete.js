import axios from "axios";


async function handler(req, res) {
    try {
        switch (req.method) {
            case "GET": {
                const query = req.query.q;
                if (!query) {
                    return res.status(200).json([])
                }
                const url = encodeURI(`https://www.egybest.kim/autoComplete.php?q=${query}`)

                const { data } = await axios.get(url)
                console.log(query)
                return res.status(200).json(data[query])
            }
            default: {
                res.status(400).json({
                    error: "Method invalid",
                    success: false
                })
            }
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "ops",
            success: false
        })
    }
}

export default handler
