interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  return (
    <div>
      {errors && (
        <ul className="list-disc list-inside space-y-1">
          {errors.map((err: string, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
