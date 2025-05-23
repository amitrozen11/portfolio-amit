function ProductManagement() {
  return (
    <div className="p-10 min-h-screen bg-[#0d1117] text-white">
      <h2 className="text-4xl font-bold mb-4">Product Management</h2>
      <p className="mb-8 text-lg">
        This page contains a presentation I built, based on an app I use daily. <br /> While using it, I identified several UX opportunities and decided to turn those insights into a structured pitch. <br /> This reflects my product thinking and ability to analyze real-world user needs.
      </p>

      <div className="relative w-full max-w-3xl mx-auto mb-6 shadow-lg rounded-lg overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.canva.com/design/DAGdrxXJYVE/DVrJd12uv05va7DNqpkzkg/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="Product Management Presentation"
        ></iframe>
      </div>

      <p className="mt-4 text-sm text-cyan-400 text-center">
        <a
          href="https://www.canva.com/design/DAGdrxXJYVE/DVrJd12uv05va7DNqpkzkg/view?utm_content=DAGdrxXJYVE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Modern Pitch Deck Presentation Template
        </a> by Amit Rozen Yakar
      </p>
    </div>
  );
}

export default ProductManagement;
