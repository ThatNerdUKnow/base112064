export default function base112064(content)
{
    let buffer = Buffer.from(JSON.stringify(content))
    return buffer.toString('ascii');
}