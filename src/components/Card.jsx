
import { CgAdidas } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import {motion} from "framer-motion";
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative text-white p-8 w-60 h-72 rounded-lg overflow-hidden bg-zinc-900 '>
        <h1 className="bold text-2xl">{data.title}</h1>
        <p className='text-sm leading-tight mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex justify-between pb-3  px-4 items-center '>
                <h5>{data.filesize}</h5>
                {data.available?<MdOutlineDownloadForOffline />: <IoIosCloseCircleOutline />}
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-3 ${data.tag.tagColor}`}>
                <h3 className='text-sm font-semibold flex items-center justify-center'>{data.tag.tagTitle}</h3>
                </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card
