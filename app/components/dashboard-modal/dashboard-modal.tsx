import { FormEvent, useEffect, useState, FC, useCallback } from "react";
import Image from "next/image";
import Avatar from '@/public/images/avatar.png';
import Button from "../button/button";
import { validateForm } from "@/app/lib/validation";
import FormInput from "../form-input/form-input";
import { fetchAllCountries } from "@/app/lib/server";
import { X } from "lucide-react";
import Modal from "../modal/modal";
import { CountryDataTypes } from "@/typings";
import { useAuth } from "@/app/hooks/auth";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";

interface DashboardModalProps {
    closeModal: () => void;
    className?: string
}

const DashboardModal: FC<DashboardModalProps> = ({ closeModal, className }) => {   
    const { addJoinedUser } = useAuth();
    const { address } = useAccount();
    const [form, setForm] = useState({
        username: "",
        email: "",
        location: ""
    });
    const [countries, setCountries] = useState<CountryDataTypes[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [requestError, setRequestError] = useState<any>("");
    const [requestResponse, setRequestResponse] = useState<any>("");
    const isValid = Object.values(form).every(val => Boolean(val));

    function handleChange({ target }: any) {
        const { name, value } = target;

        setForm({
            ...form, 
            [name]: value
        });
    }

    // Submit newly joined user
    async function submitJoinedUser(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        if(isValid) {
            try {
                await addJoinedUser({
                    setRequestError,
                    setRequestResponse,
                    data: {
                        ...form,
                        wallet_address: address
                    }
                });

                if(requestResponse) {
                    // Reset form
                    setForm({
                        username: "",
                        email: "",
                        location: ""
                    });

                    toast.success(requestResponse);

                    // Close modal
                    setTimeout(() => closeModal(), 500);
                }
            } catch(e) {
                console.log("there was an error posting form", e)
            } finally {
                setTimeout(() => setIsLoading(false), 3500);
            }
        }        
    } 

    // Fetch countries
    const fetchCountries = useCallback(() => {
        async function fetchData() {
          const countriesData: CountryDataTypes[] | any = await fetchAllCountries();
          const sortedCountries = countriesData.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
          
          setCountries(sortedCountries);
        }
    
        fetchData();
    }, [fetchAllCountries]);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <Modal className={className}>
            <div className="modal w-[90%] left-[5%] sm:w-[75%] sm:left-[13%] md:w-[70%] md:left-[15%] lg:w-[50%] absolute top-24 lg:left-[27%] rounded-lg shadow bg-gradient-to-tl from-accent-shade-800/5 to-tertiary-900/60 p-[0.03rem]">
                <div className="bg-[#08161c] rounded-lg">
                    <span className="close absolute top-5 right-5 cursor-pointer transition-transform duration-300 hover:rotate-180" onClick={closeModal}>
                        <X className="w-5 h-5 md:w-6 md:h-6 stroke-tertiary-700" />
                    </span>

                    {/* Modal Content */}
                    <div className="modal py-6 px-7 space-y-5">
                        <Image 
                            src={Avatar}
                            alt="avatar"
                            className="sm:w-[4rem] sm: md:w-[4.5rem] md:h-[4.5rem] rounded-full mx-auto"
                        />

                        {/* Form */}
                        <form 
                            className="flex flex-col gap-y-3"
                            onSubmit={submitJoinedUser}
                        >
                            {/* Request error */}
                            <p className="text-sm sm:text-[.9rem] text-red-600 text-center">{requestError}</p>

                            <FormInput 
                                type="text"
                                name="username"
                                label="Username"
                                value={form.username}
                                onChange={handleChange}
                                onBlur={({ target }) => validateForm({
                                    name: target.name,
                                    value: target.value,
                                    setError: setNameError,
                                    error: "Username can't be empty"
                                })}
                                error={nameError}
                                variant="dark"
                            />

                            <FormInput 
                                type="email"
                                name="email"
                                label="email"
                                info="Your email is protected and not displayed publicly. We will only mail important updates to you. We will not ask for your wallet phrase in any circumstance."
                                value={form.email}
                                onChange={handleChange}
                                onBlur={({ target }: { target: any }) => validateForm({
                                    name: target.name, 
                                    value: target.value, 
                                    setError: setEmailError,
                                    error: "Email is invalid"
                                })}
                                error={emailError}
                                variant="dark"
                            />

                            <div className='form-group flex flex-col gap-y-1' role="group">
                                <label className='capitalize text-sm xs:text-[.9rem] md:text-[.92rem] text-gray-300'>location</label>

                                <select 
                                    className='form-select w-full py-[.7rem] px-4 transition-all duration-150 placeholder:text-gray-600 text-[.93rem] sm:text-[.95rem] md:text-[.97rem] placeholder:text-[.97rem] font-inherit focus:ring-1 focus:ring-tertiary-900 rounded-lg border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,.1)] text-gray-700 outline-none cursor-pointer text-sm ring-0 shadow-none focus:border-none focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-90'
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    disabled={!countries.length}
                                    onBlur={({ target }) => validateForm({
                                        name: target.name,
                                        value: target.value,
                                        setError: setLocationError,
                                        error: "Please select is location"
                                    })}
                                >
                                    <option value="select_country">Select a country</option>
                                    {countries.length && countries.map(({ id, name })=> (
                                        <option key={id} value={name}>{name}</option>
                                    ))}
                                </select>


                                {locationError ? (
                                    <span className='form-error text-[.8rem] text-[#f03e3e]'>{locationError}</span> 
                                ) : null}
                            </div>

                            {/* Form actions */}
                            <div className="grid grid-cols-2 md:flex md:justify-end gap-x-2 mt-4">
                                <Button
                                    role="cancel modal button"
                                    type="button"
                                    onClick={closeModal}
                                    variant="red-border"
                                    className="rounded-full w-full md:w-28 lg:w-32"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    role="submit join form button"
                                    type="submit"
                                    variant="primary"
                                    className="rounded-full w-full md:w-28 lg:w-32"
                                    isLoading={isLoading}
                                    disabled={!isValid}
                                >
                                    Join
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
 
export default DashboardModal;