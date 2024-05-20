import { TiTick } from "react-icons/ti";

const Contact = ({ setShowContact }) => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-2 rounded-lg shadow-lg w-full sm:w-11/12 lg:w-10/12">
                    <div className="w-full h-2 bg-gradient-to-r from-Green to-Red via-Plat rounded-md"></div>
                    <div className="flex flex-row justify-between m-4">
                        <h1 className="text-gray-300">Contact</h1>
                        <div className="float-right hover:bg-gradient-to-r hover:from-Red hover:to-Yellow w-6 h-6 flex items-center justify-center rounded-xl">
                            <button onClick={() => setShowContact(false)} className="bg-white w-5 h-5 rounded-xl"><TiTick size={20} color="red" /></button>
                        </div>
                    </div>
                    <div className="text-center flex flex-col m-4">
                        <div className="border-2 border-Gray rounded-lg shadow-lg p-2 text-gray-500">
                            <p>Jaime Alonso García-Amorena</p>
                            <p>Tres Cantos, Madrid, Spain</p>
                            <p>+34 684332575</p>
                            <a href="mailto:alonsog.jaime@gmail.com">alonsog.jaime@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
        </>
    );
};

export default Contact;