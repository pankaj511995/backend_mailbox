import {Router} from 'express'
import {authenticate} from '../Authentication/Authenticate.js'
import {getAllMail,PostMail,deleteMailById,makeMessagereadTrue} from '../Controller/Mail.js'
const router=Router()

router.get('/',authenticate,getAllMail)
router.post('/',authenticate,PostMail)
router.delete('/:id',authenticate,deleteMailById)
router.patch('/',authenticate,makeMessagereadTrue)

 export default router