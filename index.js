//  Iterer avec Async/Await
async function iterateWithAsyncAwait(tableau) {
    for (const element of tableau) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(element);
    }
}

// Tâche 02: Attendre un appel
async function awaitCall() {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => resolve("Données simulées"), 1000);
        });
        console.log(data);
    } catch (error) {
        console.error("Erreur lors de l'obtention des données:", error);
    }
}

// Tâche 03: Gérer les erreurs avec Async/Await
async function awaitCallWithErrorHandling() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Erreur simulée")), 1000);
        });
        console.log(data);
    } catch (error) {
        console.error("Une erreur s'est produite:", error.message);
    }
}

// Tâche 03 bis: Chaîner Async/Await
async function chainedAsyncFunctions() {
    async function task(message) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(message);
    }

    await task("Tâche 1 terminée");
    await task("Tâche 2 terminée");
    await task("Tâche 3 terminée");
}

// Tâche 04: Attente de requêtes simultanées
async function concurrentRequests() {
    const request1 = new Promise(resolve => setTimeout(() => resolve("Réponse 1"), 1000));
    const request2 = new Promise(resolve => setTimeout(() => resolve("Réponse 2"), 1000));

    const results = await Promise.all([request1, request2]);
    console.log("Résultats combinés:", results);
}

// Tâche 05: Attente des appels parallèles
async function parallelCalls(urls) {
    const fetchSimulated = (url) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Données de ${url}`), 1000);
        });
    };

    const requests = urls.map(url => fetchSimulated(url));
    const results = await Promise.all(requests);
    console.log("Réponses:", results);
}
