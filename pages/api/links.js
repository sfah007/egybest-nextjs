// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { scrapeLeft } from "../../lib/api";

async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      const links = await scrapeLeft()
      return res.status(200).json(links)
    }
    default: {
      res.status(400).json({
        error: "Method invalid",
        success: false
      })
    }
  }
}

export default handler
