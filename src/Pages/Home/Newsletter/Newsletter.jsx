import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import bg from "../../../assets/adult-1850925_1920.jpg";

const Newsletter = () => {
    const axiosPublic = useAxiosPublic();
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subInfo = {name, email}
        axiosPublic.post("/subscribe", subInfo).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for Subscribe!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                event.target.reset();
            }
        });
    }
    return (
        <div
            className="hero h-56 md:h-80 mt-5 md:rounded-2xl"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60 md:rounded-2xl flex justify-center items-center">
                <form className="mx-3 md:mx-0" onSubmit={handleSub}>
                    <h4 className="text-3xl text-center md:text-5xl font-bold text-white">
                        Ready <span className="text-sky-400">to get</span> Join?
                    </h4>
                    <div className="flex gap-5 md:mt-5">
                        <input
                            placeholder="Your Name"
                            className="w-full text-white rounded-md pl-5 py-2 mt-3 bg-black border bg-opacity-0"
                            type="text"
                            name="name"
                        />
                        <input
                            placeholder="Your Email"
                            className="w-full text-white rounded-md pl-5 py-2 mt-3 bg-black border bg-opacity-0"
                            type="email"
                            name="email"
                        />
                    </div>
                    <input
                        className="bg-sky-500 text-white bg-opacity-25 text-xl font-semibold hover:bg-sky-500 duration-200 w-full py-2 rounded-md mt-5"
                        type="submit"
                        value="Subscribe"
                    />
                </form>
            </div>
        </div>
    );
};

export default Newsletter;