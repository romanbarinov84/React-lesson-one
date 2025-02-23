export default function ChangeText({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {description}
      </p>
    </li>
  )
}