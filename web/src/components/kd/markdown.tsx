// KD Markdown rendered for people: wide tables scroll, rule IDs link to their rule page,
// and each rule line gets an anchor (#br-rel-001) so links can jump straight to it.
// With `section`, headings also get bookmark and copy-link buttons.
import type { Element, ElementContent } from "hast";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { SectionActions } from "@/components/library/section-actions";
import { getRule } from "@/lib/kd";
import { cn } from "@/lib/utils";

const RULE_ID = /^BR-[A-Z0-9]+-\d+$/;

function firstRuleId(node?: Element): string | null {
  const first = node?.children.find((c) => c.type === "element") as Element | undefined;
  const strong = first?.tagName === "p" ? (first.children.find((c) => c.type === "element") as Element | undefined) : first;
  if (strong?.tagName !== "strong") return null;
  const text = strong.children.map((c) => (c.type === "text" ? c.value : "")).join("");
  return RULE_ID.test(text) ? text : null;
}

// react-markdown passes its syntax-tree node as a prop; keep it off the DOM element.
function withoutNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const rest = { ...props };
  delete rest.node;
  return rest;
}

const nodeText = (n: ElementContent | Element): string =>
  n.type === "text" ? n.value : n.type === "element" ? n.children.map(nodeText).join("") : "";

const components: Components = {
  table: (props) => (
    <div className="kd-table">
      <table {...withoutNode(props)} />
    </div>
  ),
  a: (props) =>
    props.href?.startsWith("http") ? <a target="_blank" rel="noreferrer" {...withoutNode(props)} /> : <a {...withoutNode(props)} />,
  li: ({ node, className, ...props }) => {
    const id = firstRuleId(node);
    if (!id) return <li className={className} {...props} />;
    const rule = getRule(id);
    return (
      <li
        id={id.toLowerCase()}
        className={cn("kd-rule", rule?.status === "needs-clarity" && "border-l-4 border-l-unclear", className)}
        {...props}
      />
    );
  },
  strong: ({ children, ...props }) => {
    const text = typeof children === "string" ? children : "";
    if (RULE_ID.test(text) && getRule(text)) {
      return (
        <Link href={`/rules/${text}`} className="font-mono text-[0.85em] font-semibold no-underline!">
          {text}
        </Link>
      );
    }
    return <strong {...withoutNode(props)}>{children}</strong>;
  },
};

type HeadingTag = "h2" | "h3" | "h4" | "h5";

function withSectionActions(section: { href: string; pageTitle: string }): Components {
  const heading = (Tag: HeadingTag): Components[HeadingTag] =>
    function Heading({ node, children, id, ...props }) {
      if (!id || !node) return <Tag id={id} {...props}>{children}</Tag>;
      return (
        <Tag id={id} {...props} className="kd-heading">
          <span>{children}</span>
          <SectionActions href={section.href} slug={id} title={nodeText(node).trim()} pageTitle={section.pageTitle} />
        </Tag>
      );
    };
  return { ...components, h2: heading("h2"), h3: heading("h3"), h4: heading("h4"), h5: heading("h5") };
}

export function Markdown({
  children,
  className,
  section,
}: {
  children: string;
  className?: string;
  /** The page this Markdown is on, to give headings bookmark / copy-link buttons. */
  section?: { href: string; pageTitle: string };
}) {
  return (
    <div className={cn("kd-prose", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={section ? withSectionActions(section) : components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
