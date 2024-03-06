import Section from "../../components/section/Section";

function Blog() {
  return (
    <Section backgroundColor="white" id="blog">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold ">Blog</h1>
        <p className=" ">Here are some of the projects I have worked on.</p>
      </div>
    </Section>
  );
}

export default Blog;
