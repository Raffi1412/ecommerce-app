import React from "react";
import Navbar from "../components/Navbar";
import ModalSearch from "../components/ModalSearch";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <ModalSearch />

            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">About Us</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">About Us</li>
                </ol>
            </div>

            <div className="container my-5">
            <div className="p-5 bg-light rounded">

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="text-center mb-4 text-primary">Tentang Kami</h1>
                        <h2 className="text-center mb-3">PT Elektronik Maju Jaya</h2>
                        <p className="lead text-center">
                            <i>"Menjual Berbagai Produk Power Bank dengan Kualitas dan Originalitas Produk"</i>
                        </p>
                        
                        <h3 className="mt-4">Visi</h3>
                        <p>
                            Menjadi perusahaan terkemuka dalam penyediaan produk elektronik berkualitas tinggi yang memberikan kepuasan maksimal kepada pelanggan dan berkontribusi positif terhadap masyarakat.
                        </p>
                        
                        <h3 className="mt-4">Misi</h3>
                        <ul>
                            <li>Menyediakan produk power bank dengan kualitas terbaik dan originalitas terjamin.</li>
                            <li>Menggunakan teknologi terkini dalam pembuatan dan penyediaan produk, termasuk website berbasis React JSX untuk pengalaman belanja online yang optimal.</li>
                            <li>Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan yang ramah dan responsif.</li>
                            <li>Terus berinovasi dalam produk dan layanan untuk memenuhi kebutuhan dan harapan pelanggan.</li>
                            <li>Menjaga komitmen terhadap keberlanjutan lingkungan dengan menggunakan praktik bisnis yang bertanggung jawab.</li>
                        </ul>
                        
                        <h3 className="mt-4">Tentang Power Store</h3>
                        <p>
                            Power Store adalah platform e-commerce yang dikembangkan dengan teknologi React JSX. Kami menawarkan berbagai macam produk power bank berkualitas tinggi dan asli, yang dirancang untuk memenuhi kebutuhan daya perangkat elektronik Anda. Kami berkomitmen untuk memberikan pengalaman belanja yang mudah, aman, dan memuaskan bagi semua pelanggan kami.
                        </p>
                    </div>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;