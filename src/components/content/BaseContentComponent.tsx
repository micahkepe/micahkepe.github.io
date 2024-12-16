import { ReactNode } from "react";

/**
 * Base content component for displaying content in a consistent format.
 * @param props.leftSideContent - The content to display on the left side of the component.
 * @param props.children - The content to display on the right side of the component.
 * @returns A base content component with the specified content.
 */
function BaseContentComponent({
  leftSideContent,
  children,
}: {
  leftSideContent: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col sm:flex-row rounded-md p-3 mb-6 hover:bg-white/5 hover:shadow-md transition-colors">
      <section className="flex-shrink-0 font-semibold text-slate text-xs uppercase mb-4 sm:mb-0 sm:mr-4">
        {leftSideContent}
      </section>
      <section>{children}</section>
    </article>
  );
}

export default BaseContentComponent;
