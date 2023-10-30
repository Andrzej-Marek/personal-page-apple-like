const TruncatedHtml = ({
  content,
  maxLength,
}: {
  content: string;
  maxLength: number;
}) => {
  if (content.length <= maxLength) {
    return (
      <div
        class="text-gray flex-1 text-xs max-h-20 overflow-hidden "
        dangerouslySetInnerHTML={content}
      />
    );
  }

  const truncatedContent = content.substring(0, maxLength) + "...";

  return (
    <div
      class="text-gray flex-1 text-sm max-h-20 w-full  overflow-hidden "
      dangerouslySetInnerHTML={truncatedContent}
    />
  );
};

export default TruncatedHtml;
