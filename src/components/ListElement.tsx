type ListElementProps = {
  startDate: Date;
  endDate?: Date;

  title: string;
  description?: string;
};

const ListElement = ({
  description,
  startDate,
  title,
  endDate,
}: ListElementProps) => {
  const formatDate = (date: Date) =>
    `${date.getMonth() + 1}/${date.getFullYear()}`;
  return (
    <div class="space-y-1">
      <div class="text-xs text-gray flex gap-1">
        <span>{formatDate(startDate)}</span>
        <span>-</span>
        <span>{endDate ? formatDate(endDate) : "NOW"}</span>
      </div>
      <div class="text-primary text-xl font-semibold">{title}</div>
      {!!description && (
        <div class="text-sm text-gray" dangerouslySetInnerHTML={description} />
      )}
    </div>
  );
};

export default ListElement;
