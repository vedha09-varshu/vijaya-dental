import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Maintain Healthy Teeth",
    desc: "Simple daily habits to keep your teeth strong and healthy.",
  },
  {
    id: 2,
    title: "When Do You Need Root Canal Treatment?",
    desc: "Signs that indicate you may need an RCT.",
  },
  {
    id: 3,
    title: "Best Ways to Whiten Your Teeth Safely",
    desc: "Professional and home remedies explained.",
  },
];

export const Blog = () => {
  return (
    <div className="section-padding">
      <h1 className="text-4xl font-bold mb-10 text-center">Dental Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.desc}</p>

            <button className="text-blue-500 font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
