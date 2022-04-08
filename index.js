export default function base112064(content)
{
    let buffer = Buffer.from(content)
    return buffer.toString('ascii');
}
