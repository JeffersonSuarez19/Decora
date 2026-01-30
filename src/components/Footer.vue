<template>
    <footer class="site-footer">
        <div class="footer-inner">
            <small>Desarrollado por Jeferson Suárez Quiñonez — Demo</small>
        </div>
    </footer>
</template>

<script setup>
// sin lógica adicional
</script>

<style scoped>
.site-footer {
    width: 100%;
    background: transparent;
    padding: 0.6rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.site-footer small {
    color: rgba(34, 34, 34, 0.7);
    font-size: 0.82rem;
    letter-spacing: 0.2px;
    text-align: center;
}

@media (max-width:700px) {
    .site-footer small {
        font-size: 0.78rem;
    }
}
</style>