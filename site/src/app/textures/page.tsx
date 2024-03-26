import textures from '@/textures.json'
import Image from 'next/image'

export default function TexturesPage() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(textures)
          .sort(([a], [b]) =>
            a < b ? -1
            : a > b ? 1
            : 0,
          )
          .map(([name, { href, width, height }]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                {width}x{height}
              </td>
              <td>
                <Image src={href} alt={name} width={width} height={height} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
