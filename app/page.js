import Image from "next/image";
import ImageText from "@/components/ImageText";
import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Team from "@/components/Team";
import BathroomBanner from "@/components/BathroomBanner";
import Community from "@/components/Community";

export default function Home() {
  return (
    <main > {/* className="flex min-h-screen flex-col items-center justify-between p-12 mdu:p-24" */}
      <Banner/>
      <div  className="flex min-h-screen flex-col items-center justify-between p-12 mdu:p-24">
        
      <Team />
  
      {/* Bathroom Banner */}
      <BathroomBanner />
      <ImageText
        title="Home maintenance, sorted!"
        description="Our expert team can help with plumbing, electrics,
        heating, repairs, decorating, bathrooms, kitchens, 
        refurbs, and much more. Tell us about your task and 
        we’ll discuss how we can help."
        buttonText="Request Callback"
        imageDes="/plumbingsmith.svg"
        order="order-none"
       
      />

      <Services />
      <CTA
        CtaText="Not sure which trade you need? Just ask us!"
        buttonText="Request Callback"
      />
      {/* Community Section */}
      <Community />
      <Heading afterOurText="LOCATIONS" />
      <ImageText
        title="We have you covered!"
        description="Our team are based in Harpenden and St Albans covering all the surrounding areas including Redbourn,Wheathampstead, Kimpton, Sandridge, Markyate, Slip End, Caddington, and more."
        buttonText="Our Locations"
        imageDes="/van1.svg"
        order="order-2"
        
      />
      </div>
    </main>
  );
}
