import CeramicCoatingEducation from "./CeramicCoatingEducation";
import BackgroundImageSection from "@/components/BackgroundImageSection";
import BeforeAfterCompare from "@/components/BeforeAfterCompare";
import ButtonGroup from "@/components/ButtonGroup";
import CoatingComparisonSection from "./CoatingComparisonSection";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Link from "@/components/Link";
import MediaContainer from "@/components/MediaContainer";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Section from "@/components/Section";
import { fotoImages, heroImages, logoImages } from "@/constants/images";
import "@/styles/homepage.styles.css";
import Video from "@/components/Video";
import Container from "@/components/Container";
import IconButton from "@/components/IconButton";
import GoogleReviews from "@/components/GoogleReviews";

const services = [
  {
    value: "mad-signature-ceramic-coating",
    label: "MAD Signature Ceramic Coating",
  },
  { value: "mad-elite-ceramic-coating", label: "MAD Elite Ceramic Coating" },
  {
    value: "mad-classic-ceramic-coating",
    label: "MAD Classic Ceramic Coating",
  },
  {
    value: "mad-signature-mf-ceramic-coating",
    label: "MAD Signature MF Ceramic Coating",
  },
];

export default function LandingPage() {
  // Log the current URL and its parameters
  if (typeof window !== "undefined") {
    console.log("Current URL:", window.location.href);
    console.log("Pathname:", window.location.pathname);
    console.log("Search Params:", window.location.search);
  }

  return (
    <>
      {/* Hero Section */}
      <Section id="banner" className="bg-mad-red-bright py-4 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-8">
          <p className="text-sm font-semibold">Ceramic Coatings</p>
          <Link
            href="tel:4234970881"
            className="text-sm font-semibold hover:underline"
          >
            (423) 497-0881
          </Link>
        </div>
      </Section>

      <BackgroundImageSection
        id="hero"
        backgroundImage={heroImages.ceramicCoating.src}
        className="items-center justify-center p-4 text-center lg:h-screen"
      >
        <Section
          id="hero-images"
          className="flex flex-col items-center gap-4 lg:py-16"
        >
          <Container className="flex w-full justify-evenly">
            <MediaContainer
              aspectRatio="aspect-square"
              width="max-w-[8rem]"
              className="!mb-0 hidden lg:block"
            >
              <Image src={logoImages.madGoogleBadge.src} objectFit="contain" />
            </MediaContainer>
            <MediaContainer
              aspectRatio="aspect-square"
              width="max-w-[8rem]"
              className="!mb-0"
            >
              <Image src={logoImages.madBadge.src} objectFit="contain" />
            </MediaContainer>
            <MediaContainer
              aspectRatio="aspect-square"
              width="max-w-[8rem]"
              className="!mb-0 hidden lg:block"
            >
              <Image
                src="/images/foto-images/customer-satisfaction.png"
                objectFit="contain"
              />
            </MediaContainer>
          </Container>
        </Section>
        <Section
          id="hero-content"
          className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row lg:py-24"
        >
          <Section
            id="hero-text"
            className="flex w-full flex-col items-center justify-center md:w-1/2"
          >
            <Container className="flex flex-col items-center gap-4 text-center">
              <p className="text-mad-red-bright text-2xl font-semibold uppercase lg:text-3xl">
                The Chattanooga Area's trusted
              </p>
              <h1 className="line z-50 text-4xl text-white lg:text-6xl">
                Ceramic Coating Professionals
              </h1>
              <ul className="flex flex-col gap-2 text-base font-semibold text-white lg:text-2xl">
                <li className="flex items-center">
                  <Icon
                    name="IoCheckmarkCircleOutline"
                    set="io5"
                    className="text-mad-red-bright mr-2"
                  />
                  Trusted by over 2500 clients
                </li>
                <li className="flex items-center">
                  <Icon
                    name="IoCheckmarkCircleOutline"
                    set="io5"
                    className="text-mad-red-bright mr-2"
                  />
                  Trained and Certified Installer
                </li>
                <li className="flex items-center">
                  <Icon
                    name="IoCheckmarkCircleOutline"
                    set="io5"
                    className="text-mad-red-bright mr-2 font-semibold"
                  />
                  Packages starting at $899
                </li>
              </ul>
              <ButtonGroup>
                <IconButton
                  variant="brightRed"
                  href="tel:14234970881"
                  iconName="LuPhone"
                >
                  Call (423) 497-0881
                </IconButton>
              </ButtonGroup>
            </Container>
          </Section>
          <Section id="hero-quote-form" className="w-full md:w-1/2">
            <QuickQuoteForm serviceCategories={services} />
          </Section>
        </Section>
      </BackgroundImageSection>

      <Section id="main" className="main">
        <Section id="ceramic-coating-education">
          <CeramicCoatingEducation />
        </Section>

        <Section id="why-choose-ceramic-coatings">
          <Container className="flex flex-col items-center gap-8 lg:flex-row">
            <div id="grid-1" className="w-full lg:w-1/2">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold">
                  Why Choose Ceramic Coatings?
                </h2>
                <p className="mb-6 text-lg">
                  Discover the key benefits of applying a ceramic coating to
                  your vehicle:
                </p>
              </div>
              <ul className="flex flex-col justify-center gap-2 text-lg">
                <li className="flex items-center">
                  <span className="text-mad-red-bright mr-2">✓</span>
                  <span>
                    Exceptional protection for your clear coat from the
                    elements.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-mad-red-bright mr-2">✓</span>
                  <span>Unmatched levels of gloss and shine.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-mad-red-bright mr-2">✓</span>
                  <span>
                    Effortless cleaning—dirt and grime struggle to stick to the
                    coating!
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-mad-red-bright mr-2">✓</span>
                  <span>Prevents oxidation, keeping your car looking new.</span>
                </li>
              </ul>
            </div>
            <div id="grid-2" className="w-full lg:w-1/2">
              <BeforeAfterCompare
                beforeImage={fotoImages.before.src}
                afterImage={fotoImages.after.src}
                position={18}
              />
            </div>
          </Container>
        </Section>

        <Section id="coating-comparison">
          <CoatingComparisonSection />
        </Section>

        {/* Process Section */}
        <Section id="about-our-shop">
          <Container className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <div id="about-our-shop-text" className="w-full lg:w-1/2">
              <div className="text-center">
                <h2 className="mb-2 text-4xl font-bold">
                  About Mayes Auto Detailing
                </h2>

                <Link
                  href="https://maps.app.goo.gl/beJt6svZ4HRw2p9j8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Google Maps"
                  className="flex items-center justify-center text-lg hover:underline"
                >
                  <Icon
                    name="FaLocationDot"
                    set="fa6"
                    className="text-mad-red-bright mr-2"
                    size={20}
                  />
                  3921 Weldon Dr, Chattanooga, TN
                </Link>
              </div>
              <div>
                <p className="mb-4 text-lg">
                  At Mayes Auto Detailing and Ceramic Coatings, our team of
                  experts is committed to providing an unparalleled customer
                  experience. We’re here to answer all your questions and ensure
                  that your vehicle leaves our shop looking its absolute best.
                </p>
                <p className="mb-4 text-lg">
                  We are proud to be certified installers for SystemX—an
                  industry-leading ceramic coating technology that delivers
                  superior durability, enhanced gloss, and exceptional
                  protection for your vehicle. Our certification means that we
                  follow strict installation standards, ensuring that your car
                  is treated with the utmost care and precision.
                </p>
                <p className="mb-4 text-lg">
                  With a range of tailored coating packages designed to meet
                  your specific needs, you can choose the perfect level of
                  protection for your car. Our premium ceramic coatings keep
                  your vehicle cleaner for longer, extend the life of your
                  paint, and provide a stunning, mirror-like finish.
                </p>
                <p className="text-lg">
                  Experience the difference at Mayes Auto Detailing – because
                  when clean isn’t enough, you deserve MAD quality!
                </p>
              </div>
            </div>
            <div id="media-section" className="w-full lg:w-1/2">
              <Grid variant="customGrid">
                <MediaContainer
                  aspectRatio="aspect-video"
                  className="border-mad-red-bright border-3"
                >
                  <Image
                    src={fotoImages.fotoImage13.src}
                    alt={fotoImages.fotoImage01.alt}
                    className="shadow-lg"
                  />
                </MediaContainer>
                <MediaContainer
                  aspectRatio="aspect-video"
                  className="border-mad-red-bright border-3"
                >
                  <Video
                    src="/videos/System_X_Automotive.mp4"
                    autoPlay
                    loop
                    muted
                  />
                </MediaContainer>
              </Grid>
            </div>
          </Container>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials">
          <h2 className="sectionTitle">What Our Clients Say</h2>
          <GoogleReviews />
        </Section>
        
        {/* Gallery Section */}
        <section className="gallerySection">
          <h2 className="sectionTitle">Before & After</h2>
          <div className="gallery">
            <img
              className="galleryImage"
              src="/images/before.jpg"
              alt="Before Ceramic Coating"
            />
            <img
              className="galleryImage"
              src="/images/after.jpg"
              alt="After Ceramic Coating"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faqSection">
          <h2 className="sectionTitle">Frequently Asked Questions</h2>
          <div className="faqItem">
            <h3 className="faqQuestion">
              How long does the ceramic coating last?
            </h3>
            <p className="faqAnswer">
              Our ceramic coating can protect your car for several years with
              proper maintenance.
            </p>
          </div>
          <div className="faqItem">
            <h3 className="faqQuestion">
              What is the difference between ceramic coating and wax?
            </h3>
            <p className="faqAnswer">
              Ceramic coating provides a longer-lasting, more durable finish
              compared to traditional wax.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contactSection">
          <h2 className="sectionTitle">Ready to Get Started?</h2>
          <p className="contactText">
            Call us at{" "}
            <a href="tel:4234970881" className="contactLink">
              423-497-0881
            </a>{" "}
            or fill out our contact form.
          </p>
          <button className="ctaButton">Contact Us</button>
        </section>
      </Section>
    </>
  );
}
