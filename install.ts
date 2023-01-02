// installer file for eslintrc
import { ShardInstallerPack } from '../../../../src/lib/deploy/ShardInstallerPack'

const install = async (
	installer: ShardInstallerPack
): Promise<{ ok: boolean, error?: string }> => {
	
	// this is required somewhere in the install process. if not called, it will be called after.
	const coreInstall = await installer.performCoreInstall()
	if (!coreInstall.ok) return coreInstall

	installer.addDevNPMPackages([
		'@typescript-eslint/parser',
		'@typescript-eslint/eslint-plugin',
		'eslint',
		'eslint-plugin-react',
		'eslint-plugin-react-hooks'
	])

	return { ok: true }

}

export default install
