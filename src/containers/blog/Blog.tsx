import Section from "../../components/section/Section";
import { Variant } from "../../lib/types";
import Heading from "../../components/heading/Heading";
import { blog } from "../../data/blog";
import Text from "../../components/text/Text";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import "./Blog.css";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";

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
                key={post.id}
                className="grid grid-cols-2 gap-10 justify-center md:grid-cols-1 "
              >
                <div className="blog_item ">
                  <img
                    className="blog_item_image skin-border   w-[244px] h-[324px] lg:w-[326px] lg:h-[256px] md:w-[647px] md:h-[267px]  "
                    src={post.img}
                    alt={post.title}
                  />
                  <button title={post.title} className={"blog_item_button "}>
                    <TfiAngleDoubleRight color={variant} size={18} />
                  </button>
                  <span className="blog-overlay " />
                </div>

                <div className=" flex flex-col gap-6">
                  <Text
                    uppercase
                    align="text-start"
                    variant={variant}
                    size="l"
                    title={post.title}
                  />
                  <Text
                    className=" text-[#9c9c9c]"
                    align="text-start"
                    variant={variant}
                    size="s"
                    text={post.date}
                  />
                  <Text
                    align="text-start"
                    variant={variant}
                    size="s"
                    text={post.text}
                  />

                  <Button variant="primary" className=" mt-5 py-2 px-3 ">
                    <Text
                      className=" text-[0.7rem]"
                      align="text-start"
                      size="s"
                      text={"Read more"}
                    />
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
