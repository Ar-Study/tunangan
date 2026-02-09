<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import FotoCouple from '$lib/assets/MEMOLI46844.JPG';
	import Nova from '$lib/assets/1.jpg';
	import Farrel from '$lib/assets/2.jpg';

	let isOpen = false;
	let showAnimation = false;
	let isFadingCover = false;
	let audio;

	// State untuk tombol salin gift
	let copyStatus = {
		rek1: 'Salin No. Rekening',
		rek2: 'Salin No. Rekening'
	};

	// Data Pesan Buku Tamu
	let guestMessages = [
		{
			name: 'Bayu',
			message: 'Selamat menempuh hidup baru Adit & Kirana! 🌸',
			time: '2 menit lalu'
		},
		{
			name: 'Siti',
			message: 'Semoga menjadi keluarga sakinah mawaddah warahmah.',
			time: '1 jam lalu'
		}
	];

	// Countdown Logic
	let days, hours, minutes, seconds;
	const targetDate = new Date('April 26, 2026 08:00:00').getTime();

	function updateCountdown() {
		const now = new Date().getTime();
		const diff = targetDate - now;
		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((diff % (1000 * 60)) / 1000);
	}

	onMount(() => {
		AOS.init({ duration: 1200, once: false });
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});

	function openInvitation() {
		isFadingCover = true;
		setTimeout(() => {
			showAnimation = true;
			if (audio) {
				audio.volume = 0.5;
				audio.play();
			}
		}, 400);

		// Durasi menonton animasi sinematik (8.5 detik)
		setTimeout(() => {
			isOpen = true;
			showAnimation = false;
		}, 8500);
	}

	function copyToClipboard(id, text) {
		navigator.clipboard.writeText(text);
		copyStatus[id] = 'Tersalin! ✅';
		setTimeout(() => {
			copyStatus[id] = 'Salin No. Rekening';
		}, 2000);
	}
</script>

<audio bind:this={audio} loop>
	<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
</audio>

<main class="relative min-h-screen overflow-x-hidden bg-[#f4e4d7] text-[#5e0b0b]">
	{#if !isOpen}
		<section
			class="fixed inset-0 z-[200] flex flex-col items-center justify-center p-6 text-center transition-all duration-[800ms] {isFadingCover
				? 'scale-125 opacity-0 blur-lg'
				: 'opacity-100'}"
		>
			<div
				class="absolute inset-0 bg-[url('https://inv.punakawandigital.id/wp-content/uploads/2025/04/SUJA-CVR-MOBILE-PII.webp')] bg-cover bg-center"
			>
				<div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
			</div>
			<div class="relative z-10" data-aos="zoom-in">
				<div
					class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d4af37] bg-white/10 backdrop-blur-md"
				>
					<span
						class="font-serif text-3xl text-[#d4af37]"
						style="font-family: 'Great Vibes', cursive;">FF</span
					>
				</div>
				<p class="mb-2 text-xs tracking-[0.5em] text-white uppercase opacity-70">The Wedding of</p>
				<h1
					class="mb-12 font-serif text-6xl text-[#d4af37]"
					style="font-family: 'Great Vibes', cursive;"
				>
					Farrel & Firda
				</h1>
				<button
					on:click={openInvitation}
					class="rounded-full bg-[#d4af37] px-14 py-4 font-bold tracking-widest text-[#5e0b0b] uppercase shadow-2xl transition-all hover:bg-white"
				>
					Buka Undangan
				</button>
			</div>
		</section>
	{/if}

	{#if showAnimation}
		<div
			class="fixed inset-0 z-[150] flex items-center justify-center overflow-hidden bg-[#f4e4d7]"
		>
			<div class="pointer-events-none absolute inset-0 z-[100] flex">
				<div class="animate-gate-left flex h-full w-1/2 items-center justify-end bg-[#5e0b0b]">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Gunungan_Wayang.svg/1200px-Gunungan_Wayang.svg.png"
						class="h-3/4 translate-x-1/2 opacity-40"
						alt=""
					/>
				</div>
				<div class="animate-gate-right flex h-full w-1/2 items-center justify-start bg-[#5e0b0b]">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Gunungan_Wayang.svg/1200px-Gunungan_Wayang.svg.png"
						class="h-3/4 -translate-x-1/2 opacity-40"
						alt=""
					/>
				</div>
			</div>

			<div class="absolute inset-0 flex items-center justify-center">
				<img
					src="https://inv.punakawandigital.id/wp-content/uploads/2025/04/SUJA-ACARA-BG2-PII.webp"
					class="animate-bg-zoom-slow absolute w-[180%] opacity-20"
					alt=""
				/>

				{#each Array(20) as _, i}
					<div
						class="petal animate-fall"
						style="left: {Math.random() * 100}%; animation-delay: {Math.random() * 5}s;"
					>
						🌸
					</div>
				{/each}

				<div class="animate-hero-pop relative z-[70] text-center">
					<div class="relative inline-block">
						<div
							class="absolute inset-0 animate-ping rounded-t-full border-2 border-[#d4af37] opacity-20"
						></div>
						<img
							src={FotoCouple}
							class="h-72 w-56 rounded-t-full border-[10px] border-white object-cover shadow-2xl"
							alt=""
						/>
					</div>
					<div
						class="mt-6 rounded-full border-2 border-[#d4af37] bg-white/90 px-10 py-3 shadow-2xl backdrop-blur-md"
					>
						<h2
							class="font-serif text-2xl text-[#5e0b0b]"
							style="font-family: 'Great Vibes', cursive;"
						>
							Farrel & Firda
						</h2>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<div
		class="transition-all duration-[2000ms] {isOpen
			? 'opacity-100'
			: 'pointer-events-none fixed opacity-0'}"
	>
		<section
			class="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center"
		>
			<div
				class="fixed inset-0 z-0 bg-[url('https://inv.punakawandigital.id/wp-content/uploads/2025/04/BG-DATES-SUNDA.jpg')] bg-cover opacity-10"
			></div>

			<div data-aos="fade-up" class="relative z-10">
				<img
					src="https://inv.punakawandigital.id/wp-content/uploads/2025/04/SUJA-FLOWERS-PII.webp"
					class="animate-float mx-auto mb-6 w-32"
					alt=""
				/>
				<h1
					class="font-serif text-6xl text-[#5e0b0b] md:text-8xl"
					style="font-family: 'Great Vibes', cursive;"
				>
					Farrel & Firda
				</h1>
				<p class="mt-4 text-xs font-bold tracking-[0.5em] text-[#d4af37] uppercase">
					26 . 04 . 2026
				</p>
			</div>

			<div class="relative z-10 mt-16 flex gap-4" data-aos="zoom-in">
				{#each [['Hari', days], ['Jam', hours], ['Menit', minutes], ['Detik', seconds]] as [label, value]}
					<div
						class="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-[#5e0b0b] text-[#d4af37] shadow-lg"
					>
						<span class="text-xl font-bold">{value || 0}</span>
						<span class="text-[9px] uppercase opacity-80">{label}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="relative bg-white/40 px-6 py-24 backdrop-blur-sm">
			<div class="mx-auto max-w-4xl space-y-20">
				<div class="flex flex-col items-center text-center" data-aos="fade-right">
					<div class="relative mb-8 h-64 w-64 p-4">
						<div
							class="animate-spin-slow absolute inset-0 bg-[url('https://inv.punakawandigital.id/wp-content/uploads/2025/04/SUJA-FLOWERS-PII.webp')] bg-contain bg-no-repeat opacity-20"
						></div>
						<img
							src={Nova}
							alt="Kirana"
							class="relative z-10 h-full w-full rounded-full border-4 border-[#d4af37] object-cover shadow-2xl"
						/>
					</div>
					<h2 class="text-3xl font-bold">Firda Nova Oktariani</h2>
					<p class="font-serif text-slate-600 italic">Putri dari Bapak Aris & Ibu Mukidah</p>
				</div>

				<div
					class="text-center font-serif text-6xl text-[#d4af37]"
					style="font-family: 'Great Vibes', cursive;"
					data-aos="zoom-in"
				>
					&
				</div>

				<div class="flex flex-col items-center text-center" data-aos="fade-left">
					<div class="relative mb-8 h-64 w-64 p-4">
						<div
							class="animate-spin-slow-reverse absolute inset-0 bg-[url('https://inv.punakawandigital.id/wp-content/uploads/2025/04/SUJA-FLOWERS-PII.webp')] bg-contain bg-no-repeat opacity-20"
						></div>
						<img
							src={Farrel}
							alt="Farrel"
							class="relative z-10 h-full w-full rounded-full border-4 border-[#d4af37] object-cover shadow-2xl"
						/>
					</div>
					<h2 class="text-3xl font-bold">Muhammad Farrel Pradipta</h2>
					<p class="font-serif text-slate-600 italic">
						Putra dari Bapak Didik Hermanto & Ibu Kristiyanti Setyaningrum
					</p>
				</div>
			</div>
		</section>

		<section class="relative bg-[#5e0b0b] px-6 py-24 text-[#f4e4d7]">
			<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
				{#each ['Akad Nikah', 'Resepsi'] as title}
					<div
						class="rounded-[3rem] border border-[#d4af37]/30 bg-white/5 p-10 text-center backdrop-blur-md"
						data-aos="fade-up"
					>
						<h3
							class="mb-4 font-serif text-3xl text-[#d4af37]"
							style="font-family: 'Great Vibes', cursive;"
						>
							{title}
						</h3>
						<p class="text-lg font-bold">Minggu, 26 April 2026</p>
						<p class="mb-6 text-xs tracking-widest text-[#d4af37] uppercase">08.00 - Selesai</p>
						<p class="mb-8 text-sm italic opacity-80">Sportorium UMY, Bantul, Yogyakarta</p>
						<button
							class="rounded-full border border-[#d4af37] px-6 py-2 text-[10px] uppercase transition-all hover:bg-[#d4af37] hover:text-[#5e0b0b]"
							>Lihat Lokasi</button
						>
					</div>
				{/each}
			</div>
		</section>

		<section class="relative px-6 py-24 text-center">
			<div class="mx-auto max-w-4xl">
				<div data-aos="fade-up">
					<h2
						class="font-serif text-5xl text-[#5e0b0b]"
						style="font-family: 'Great Vibes', cursive;"
					>
						Wedding Gift
					</h2>
					<p class="mx-auto mt-4 max-w-md text-sm text-slate-600 italic">
						Kehadiran Anda adalah hadiah terbesar, namun jika ingin memberikan tanda kasih, dapat
						melalui:
					</p>
				</div>

				<div class="mt-16 grid gap-8 md:grid-cols-2">
					<div
						class="group relative flex flex-col items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#5e0b0b] to-[#8b1a1a] p-8 text-[#d4af37] shadow-2xl transition-all hover:-translate-y-2"
						data-aos="flip-left"
					>
						<div class="absolute top-0 right-0 p-6 opacity-20">
							<span class="text-2xl font-bold italic">Jateng</span>
						</div>
						<div class="w-full text-left">
							<p class="text-[10px] tracking-[0.3em] uppercase opacity-60">Bank Account</p>
							<div class="mt-8 flex items-center gap-4">
								<div
									class="h-10 w-14 rounded-md bg-gradient-to-tr from-[#d4af37] to-[#f4e4d7] opacity-80 shadow-inner"
								></div>
								<p class="font-mono text-2xl tracking-wider">1234567890</p>
							</div>
							<p class="mt-6 text-lg font-bold uppercase">Muhammad Farrel Pradipta</p>
						</div>
						<button
							on:click={() => copyToClipboard('rek1', '1234567890')}
							class="mt-8 w-full rounded-full bg-[#d4af37] py-3 text-xs font-bold text-[#5e0b0b] uppercase shadow-lg transition-all hover:bg-white"
						>
							{copyStatus.rek1}
						</button>
					</div>

					<div
						class="group relative flex flex-col items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d4af37] to-[#b8860b] p-8 text-[#5e0b0b] shadow-2xl transition-all hover:-translate-y-2"
						data-aos="flip-right"
					>
						<div class="absolute top-0 right-0 p-6 text-xl font-bold italic opacity-40">BSI</div>
						<div class="w-full text-left">
							<p class="text-[10px] tracking-[0.3em] text-[#5e0b0b] uppercase opacity-60">
								Bank Account
							</p>
							<div class="mt-8 flex items-center gap-4">
								<div
									class="h-10 w-14 rounded-md bg-gradient-to-tr from-[#5e0b0b] to-[#8b1a1a] opacity-80 shadow-inner"
								></div>
								<p class="font-mono text-2xl tracking-wider">0987654321</p>
							</div>
							<p class="mt-6 text-lg font-bold uppercase">Firda Nova Oktariani</p>
						</div>
						<button
							on:click={() => copyToClipboard('rek2', '0987654321')}
							class="mt-8 w-full rounded-full bg-[#5e0b0b] py-3 text-xs font-bold text-[#d4af37] uppercase shadow-lg transition-all hover:bg-white hover:text-[#5e0b0b]"
						>
							{copyStatus.rek2}
						</button>
					</div>
				</div>
			</div>
		</section>

		<section class="relative px-6 py-24">
			<div
				class="mx-auto max-w-2xl rounded-[2.5rem] bg-white p-8 shadow-xl md:p-12"
				data-aos="zoom-in"
			>
				<h2
					class="mb-10 text-center font-serif text-4xl"
					style="font-family: 'Great Vibes', cursive;"
				>
					Wishes & Prayers
				</h2>
				<div class="space-y-4">
					<input
						type="text"
						placeholder="Nama Anda"
						class="w-full rounded-xl bg-[#f4e4d7] p-4 outline-none focus:ring-2 focus:ring-[#5e0b0b]"
					/>
					<textarea
						placeholder="Tulis ucapan..."
						class="w-full rounded-xl bg-[#f4e4d7] p-4 outline-none focus:ring-2 focus:ring-[#5e0b0b]"
						rows="3"
					></textarea>
					<button
						class="w-full rounded-xl bg-[#5e0b0b] py-4 font-bold tracking-widest text-[#d4af37] uppercase"
						>Kirim Ucapan</button
					>
				</div>

				<div class="custom-scroll mt-10 max-h-60 space-y-4 overflow-y-auto pr-2">
					{#each guestMessages as msg}
						<div
							class="rounded-r-xl border-l-4 border-[#5e0b0b] bg-[#f4e4d7]/30 p-4"
							data-aos="fade-up"
						>
							<p class="text-sm font-bold">
								{msg.name} <span class="ml-2 text-[9px] font-normal opacity-50">{msg.time}</span>
							</p>
							<p class="mt-1 text-xs italic opacity-70">"{msg.message}"</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<footer class="py-12 text-center text-[10px] tracking-[0.4em] uppercase opacity-40">
			&copy; 2026 Farrel & Firda Wedding
		</footer>
	</div>
</main>

<style>
	/* --- Animation Styles --- */
	@keyframes gate-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-105%);
		}
	}
	@keyframes gate-right {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(105%);
		}
	}
	.animate-gate-left {
		animation: gate-left 0.8s 0.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
	}
	.animate-gate-right {
		animation: gate-right 0.8s 0.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
	}

	@keyframes hero-pop {
		0% {
			transform: scale(0) translateY(100px);
			opacity: 0;
		}
		70% {
			transform: scale(1.05) translateY(-10px);
			opacity: 1;
		}
		100% {
			transform: scale(1) translateY(0);
			opacity: 1;
		}
	}
	.animate-hero-pop {
		animation: hero-pop 2.5s 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
	}

	@keyframes fall {
		0% {
			transform: translateY(-5vh) rotate(0deg);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		100% {
			transform: translateY(100vh) rotate(720deg);
			opacity: 0;
		}
	}
	.petal {
		position: absolute;
		top: -5vh;
		z-index: 100;
		pointer-events: none;
	}
	.animate-fall {
		animation: fall 7s linear infinite;
	}

	@keyframes spin-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.animate-spin-slow {
		animation: spin-slow 15s linear infinite;
	}
	.animate-spin-slow-reverse {
		animation: spin-slow 20s linear infinite reverse;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
	.animate-float {
		animation: float 4s ease-in-out infinite;
	}

	@keyframes bg-zoom-slow {
		0% {
			transform: scale(1.3);
		}
		100% {
			transform: scale(1.05);
		}
	}
	.animate-bg-zoom-slow {
		animation: bg-zoom-slow 10s ease-out forwards;
	}

	/* --- Utilities --- */
	.custom-scroll::-webkit-scrollbar {
		width: 4px;
	}
	.custom-scroll::-webkit-scrollbar-thumb {
		background: #5e0b0b;
		border-radius: 10px;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		background-color: #f4e4d7;
	}
</style>
