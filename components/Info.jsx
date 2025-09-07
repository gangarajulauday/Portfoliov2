import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlineUser className="text-2xl mt-1 text-accent"/>
                <div>
                    <p>Date of Birth</p>
                    <p> July 1991</p>
                </div>
            </div>
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlineMail className="text-2xl mt-1 text-accent"/>
                <div>
                    <p>Email Address</p>
                    <p>gangarajulauday@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlinePhone className="text-2xl mt-1 text-accent"/>
                <div>
                    <p>Phone</p>
                    <p>(660)262-8695</p>
                </div>
            </div>
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlineLocationMarker className="text-2xl mt-1 text-accent"/>
                <div>
                    <p>Location</p>
                    <p>Rochester, NY, USA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info