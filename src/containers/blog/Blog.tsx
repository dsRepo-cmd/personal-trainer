import Section from "../../components/section/Section";
import { Variant } from "../../lib/types";
import Heading from "../../components/heading/Heading";
import { blog } from "../../data/blog";
import Text from "../../components/text/Text";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import "./Blog.css";

interface BlogProps {
  className?: string;
  variant?: Variant;
}

const Blog: React.FC<BlogProps> = ({ variant = "dark" }) => {
  return (
    <Section backgroundColor={variant} id="blog">
      <div className="flex flex-col w-full gap-10 items-center justify-center">
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
                  <button className={"blog_item_button "}>
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

                  <button className=" self-start text-xs delay-50 rounded-sm uppercase mt-5 py-2 px-3 bg-[#62dc42] hover:bg-[#ff4739]">
                    <Text
                      className=" text-[0.7rem]"
                      align="text-start"
                      size="s"
                      text={"Read more"}
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
