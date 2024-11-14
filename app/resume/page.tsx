export default function ResumePage() {
  return (
    <div style={{ width: "100%", height: "160vh" }}>
      <embed
        style={{
          width: "100%",
          height: "80%",
        }}
        type="application/pdf"
        src="/Resume.pdf"
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a
          href="/Resume.pdf"
          download="Resume.pdf"
          style={{ fontSize: "18px", color: "#006FEE" }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
