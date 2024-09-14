import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  LandPlot,
  MonitorSmartphone,
  Rocket,
  Shrub,
  Target,
  UserCheck,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Customer Interactions", value: "1000+" },
  { label: "Stakeholder Engagements", value: "4500+" },
  { label: "Jira Tickets", value: "15000+" },
];

const projects = [
  {
    id:1,
    title: "This website",
    description: "My 3D Portfolio",
    image: "/assets/portfolio.webm",
    href: "#",
  },
  {
    id:2,
    title: "SFU",
    description: "SFU - Simon Fraser University",
    image: "/assets/sfu.png",
    href: "https://www.sfu.ca",
  },
  {
    id:3,
    title: "Lush",
    description: "Lush - A British Cosmetics Retailer",
    image: "/assets/lush.webm",
    href: "https://www.lush.com/ca/en_ca",
  },
  {
    id:4,
    title: "Urban Analytics - NHSLive",
    description:
      "NHSLive - The tools and intelligence to make better decisions.",
    image: "/assets/nhslive.webm",
    href: "https://www.nhslive.ca/",
  },
  {
    id:5,
    title: "Western Forest Products",
    description: "Western Forest Products Inc. is a Canadian lumber company",
    image: "/assets/wfp.png",
    href: "https://www.westernforest.com/",
  },
  {
    id:6,
    title: "AmbiMi",
    description: "AmbiMi - On-Demand Staffing Solution",
    image: "/assets/ambimi.webm",
    href: "https://www.ambimi.com/get-the-app-orgs",
  },
];

const services = [
  {
    service: "Crafting Product Strategy",
    description:
      "As a strategic thinker, plotting the course for the product's journey. I analyze market trends, pore over customer feedback, and identify opportunities for improvement.",
    icon: Target,
  },
  {
    service: "Planning the Roadmap",
    description:
      "Like plotting a cross-country road trip, I map out the features and enhancements the product will roll out over time. It's all about prioritizing what matters most to users and the business.",
    icon: LandPlot,
  },
  {
    service: "Collaborating like Champions",
    description:
      "I work with cross-functional teams to deliver high-quality products. I help engineers, designers, marketers, and sales teams to bring the product to life. It's all about that synergy.",
    icon: UserCheck,
  },
  {
    service: "Overseeing Development",
    description:
      "I am responsible for leading and motivating the development team to deliver high-quality products. I provide clear direction, manage expectations, and ensure that the team is aligned with the product vision.",
    icon: MonitorSmartphone,
  },
  {
    service: "Launching with Pizzazz",
    description:
      "I am the mastermind behind the big reveal. I collaborate to craft the perfect launch strategy. My goal is to ensure that the product not only shines but also meets the needs and expectations of our target market.",
    icon: Rocket,
  },
  {
    service: "Learning and Growing",
    description:
      "I am dedicated to data-driven decision-making. I meticulously analyze metrics and user feedback to identify opportunities for product improvement and ensure that it remains relevant and aligned with customer needs.",
    icon: Shrub,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".5"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Pankaj.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".5"
                className="mt-1 max-w-lg text-2xl tracking-tight text-muted-foreground"
              >
                A strategic product leader who thrives on the excitement of
                launch and release days.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".5"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:contacttiwari@yahoo.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <Image
            src="/assets/profile.jpg"
            alt="Pankaj Tiwari Profile Picture"
            width={300}
            height={150}
            quality={100}
            className="mt-14 h-full w-full rounded-md bg-primary object-cover"
          />
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".5"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-left text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              As a seasoned Product Leader with over a decade of experience in
              SaaS and startups, I am driven by a passion for creating products
              that make a positive impact.
              <br />
              <br />
              I oversee product strategy, development, and execution, ensuring
              alignment with company&apos;s objectives and customer needs.
              <br />
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".5" className="my-64">
            <span className="text-gradient clash-grotesk text-right text-4xl font-semibold tracking-tighter">
              ✨ Portfolio
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Streamlined Saas Experiences.
            </h2>
            <p className="mt-1.5 text-left text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve tinkered with a variety of products, from websites and
              mobile apps to data analytics platforms to complex enterprise
              systems like CRMs, ERPs, and large-scale web applications. Here
              are some of my favorite ones
            </p>
            <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3 mt-5">
            {projects.map((project) => (
              <div key={project.id}>
                <Card id="tilt">
                  <CardHeader className="p-0">
                    <Link href={project.href} target="_blank" passHref key={project.id}>
                      {project.image.endsWith(".webm") ? (
                        <video
                          src={project.image}
                          autoPlay
                          loop
                          muted
                          className="object-wrap aspect-video h-full w-full rounded-t-md bg-primary"
                        />
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={300}
                          quality={100}
                          className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                        />
                      )}
                    </Link>
                  </CardHeader>
                  <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                    <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                      {project.description}
                    </CardTitle>
                  </CardContent>
                </Card>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".5"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-5"
          >
            <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Product Management Toolkit
            </h2>
            <span className="text-gradient clash-grotesk text-center text-xl font-semibold tracking-tighter">
              What I do on a day-to-day basis?
            </span>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-12 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".5"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-8 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work&nbsp;
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-2 text-base tracking-tight text-muted-foreground xl:text-lg">
              Are you looking for a Product Leader to help you achieve your
              business goals?
            </p>
            <Link href="mailto:contacttiwari@yahoo.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}