import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import { blog } from "../../data/blog";
import Text from "../../components/text/Text";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import type { Variant } from "../../lib/types";
import PlayIcon from "../../assets/play.svg";

interface BlogProps {
  className?: string;
  variant?: Variant;
}

const Blog: React.FC<BlogProps> = ({ variant = "dark" }) => {
  return (
    <Section variant={variant} id="blog">
      <Container>
        <Heading variant={variant} heading={blog.heading} />
        <div className="">
          <div className=" grid grid-cols-2 gap-8 lg:grid-cols-1">
            {blog.posts.map((post) => (
              <article
                data-aos="zoom-in"
                key={post.id}
                className="grid grid-cols-2 gap-10 justify-center md:grid-cols-1 "
              >
                <div
                  data-aos="zoom-in"
                  className=" group relative cursor-pointer w-fit h-fit overflow-hidden p-[2px] border border-[#e4e4e4]"
                >
                  <img
                    className=" object-cover  w-[244px] h-[324px] lg:w-[326px] lg:h-[256px] md:w-[620px] md:h-[267px]  "
                    width={600}
                    height={370}
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                  />
                  <button
                    title={post.title}
                    className={
                      "  duration-300 absolute top-[-100%] left-1/2 translate-x-[-50%] translate-y-[-50%] border-2 border-white rounded-full p-[18px] opacity-0 z-20 group-hover:top-1/2 group-hover:opacity-100"
                    }
                  >
                    <PlayIcon color={variant} width={18} height={18} />
                  </button>
                  <span className=" absolute top-0 right-0 w-full h-full bg-primary opacity-0 z-10 group-hover:opacity-80 " />
                </div>

                <div className=" flex flex-col gap-6">
                  <Text
                    className=" uppercase text-xl font-bold font-primary"
                    variant={variant}
                    title={post.title}
                  />
                  <Text
                    className=" text-sm text-[#9c9c9c]"
                    variant={variant}
                    text={post.date}
                  />
                  <Text
                    variant={variant}
                    className=" text-sm"
                    text={post.text}
                  />

                  <Button
                    variant="primary"
                    className=" mt-5 py-2 px-3 text-[0.7rem] text-white "
                  >
                    Read more
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
