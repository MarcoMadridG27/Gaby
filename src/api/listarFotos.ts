export async function listarFotos(folder: string): Promise<string[]> {
    const response = await fetch(
        `https://vj6d9cy5bd.execute-api.us-east-1.amazonaws.com/default/listarFotosS3?folder=${encodeURIComponent(folder)}`
    );

    if (!response.ok) {
        throw new Error("Error al obtener las fotos");
    }

    const data = await response.json();
    return data.fotos; // asegúrate que tu Lambda retorna { fotos: [...] }
}
