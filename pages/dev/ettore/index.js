import Layout from "@/components/Layout";
import Footer from "@/dev/ettore/Footer";
export default function Page(){
    return(
        <Footer
                    imageUrl="https://immagine di sfondo"
                    color="#272727"
                    opacitycolor="1"
                    opacity={1}
                    title1="About Us"
                    description1=""
                    title2="Social Feed"
                    socials={socials}
                    title3="I Settori"
                    images={images}
                    menu={sezioni}
                    copyright="Copyright (C) 2023 9dreams Agency."
        />

    )
}