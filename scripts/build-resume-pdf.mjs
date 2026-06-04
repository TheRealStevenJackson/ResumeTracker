import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import { mdToPdf } from "md-to-pdf";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outRoot = path.join(repoRoot, "out");
const stylesheet = path.join(repoRoot, "scripts", "resume-pdf.css");

const resumeArg = process.argv[2];
if (!resumeArg) {
  console.error("Usage: npm run build-resume-pdf -- <path-to-resume.md>");
  console.error(
    "Example: npm run build-resume-pdf -- applications/2026-06-visual-concepts-graphics-engineer/resume.md"
  );
  process.exit(1);
}

const resumePath = path.resolve(repoRoot, resumeArg);
if (!existsSync(resumePath)) {
  console.error(`Resume not found: ${resumePath}`);
  process.exit(1);
}

if (path.basename(resumePath) !== "resume.md") {
  console.error("Expected a file named resume.md");
  process.exit(1);
}

const applicationSlug = path.basename(path.dirname(resumePath));
const outputDir = path.join(outRoot, applicationSlug);
const pdfPath = path.join(outputDir, "resume.pdf");

await mkdir(outputDir, { recursive: true });

const result = await mdToPdf(
  { path: resumePath },
  {
    dest: pdfPath,
    basedir: path.dirname(resumePath),
    stylesheet,
    pdf_options: {
      format: "Letter",
      margin: { top: "0.45in", right: "0.5in", bottom: "0.45in", left: "0.5in" },
      printBackground: true,
    },
  }
);

if (!result) {
  console.error("PDF generation failed.");
  process.exit(1);
}

console.log(`Wrote ${path.relative(repoRoot, pdfPath)}`);
