import React from 'react'
import { HiChevronDown } from "react-icons/hi";

const Catalog = () => {
    return (
        <>

            <div>
                <div className='container'>
                    <div>
                        <ul>
                            <li>
                                <h1>New Releases (50)</h1>
                                <p>Tops & T-Shirts</p>
                                <p>Shorts</p>
                                <p>Hoodies & Pullovers</p>
                                <p>Jackets & Vests</p>
                                <p>Pants & Tights</p>
                                <p>Fleece</p>
                                <p>Compression & Baselayer</p>
                                <p>Tracksuits</p>
                                <p>Socks</p>
                            </li>
                            <li>
                                <span>
                                    <h1>Sale & Offfers</h1>
                                    <HiChevronDown />
                                </span>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                <label for="vehicle1"> Up to 50% Off</label><br />
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                <label for="vehicle1"> Sale</label>
                            </li>

                            <li>
                                <h1 className='w-10 h-10 bg-black rounded-[50%]'></h1>
                                <p>Black</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Catalog