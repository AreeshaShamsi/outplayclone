export default function FeaturesSection() {
  const features = [
    {
      image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/marketing_1_b06f39db37.svg",
      title: "You outgrow spreadsheets and manual outreach",
      description: `A spreadsheet and time are all you need to get started with outreach. This works until it doesn’t. You fall behind your outreach targets, replies and follow-ups slip through the cracks, and you miss quota as a result.

With Outplay, you can automate outreach and follow ups for an entire list of contacts across email, social, chat, and phone. Plus, you’ll have the deep insights you need to optimize your sequences. More outreach. No more missed replies and follow ups. Blow past your quota.`,
    },
    {
      image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/network_1_7420c4ed16.svg",
      title: "You need more than just email outreach",
      description: `Email automation helps you automate email outreach (obviously) — but what about Twitter, text, phone, and chat outreach? Either you’re not reaching prospects there, or you aren’t reaching them often enough.

With Outplay, you can snap together personalized automated email and social outreach campaigns. Then, when the time is right, reach out via the dashboard dialer or magic chat.`,
    },
    {
      image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/block_1_808b7569ff.svg",
      title: "Manual processes slow you down",
      description: `Manual tasks eat up your sales reps' time. They have to copy-paste contacts, track follow-ups, and deal with spreadsheets.

Outplay helps automate these tasks so your reps can focus on selling, not managing tools.Manual tasks eat up your sales reps' time. They have to copy-paste contacts, track follow-ups, and deal with spreadsheets.`,
    },
    {
      image: "https://outplayhq-uploads.s3.us-west-2.amazonaws.com/discount_1_aae4466e04.svg",
      title: "Lack of visibility into outreach efforts",
      description: `It's hard to track which emails got sent, what replies came in, and how your team is performing.

Outplay provides powerful analytics so you get complete visibility into every outreach campaign’s progress.Outplay provides powerful analytics so you get complete visibility into every outreach campaign’s progress.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-center mb-10">
        It’s time to <span className="font-bold">switch to Outplay</span> when..
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200 flex flex-col md:flex-row items-start">
            <img
              src={feature.image}
              alt={`Feature ${index + 1}`}
              className="w-16 h-16 object-contain mr-4 mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
