// installer file for eslintrc
import { installer } from '../../src/lib/deploy/installer'

const install = async (
	installer: installer.Pack
): Promise<{ ok: boolean, error?: string }> => {
	
	// this is required somewhere in the install process. if not called, it will be called after.
	const coreInstall = await installer.performCoreInstall()
	if (!coreInstall.ok) return coreInstall

	return { ok: true }

}

export default install
