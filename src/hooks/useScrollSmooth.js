import { useCallback } from 'react'

/**
 * Hook customizado para scroll suave até elementos
 * Centraliza a lógica de scroll que era repetida em múltiplos componentes
 * 
 * @returns {Function} Função que recebe um ID do elemento para fazer scroll
 */
export function useScrollSmooth() {
    return useCallback((targetId) => {
        const element = document.querySelector(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])
}
