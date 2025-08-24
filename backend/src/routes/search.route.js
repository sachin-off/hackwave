import express from "express"
import multer from "multer"
import { textSearch,imageSearch } from "../controllers/search.controller.js";

const router = express.Router();

const upload = multer({des:"uploads/"})
router.get("/",textSearch)

router.post("/image",upload.single("image"),imageSearch)

export default router
